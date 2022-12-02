FROM composer:2 AS stage_composer
ARG APP_ENV='prod'
ARG COMPOSER_AUTH
ENV COMPOSER_AUTH ${COMPOSER_AUTH}

WORKDIR /vendor

COPY ./composer.json ./
COPY ./composer.lock ./

RUN composer install --ignore-platform-reqs --prefer-dist --no-interaction --no-progress --optimize-autoloader --no-scripts  \
    && rm -rf /root/.composer

FROM php:7.4-fpm as base
RUN apt-get update && apt-get install -y \
        libfreetype6-dev libjpeg62-turbo-dev libpng-dev libicu-dev libmagickwand-dev git wget libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd zip pcntl intl opcache

RUN apt-get install -y nginx \
        && ln -sf /dev/stdout /var/log/nginx/access.log \
        && ln -sf /dev/stderr /var/log/nginx/error.log \
    && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/*

RUN pecl install imagick \
&& docker-php-ext-enable imagick

# add composer executable
COPY --from=stage_composer /usr/bin/composer /usr/bin/composer

# download tini
ARG TINI_VERSION='v0.19.0'
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /usr/local/bin/tini
RUN chmod +x /usr/local/bin/tini


FROM base as production

WORKDIR /project

ARG UID=1000
ARG PHP_FPM_INI_DIR="/usr/local/etc/php"

COPY --from=stage_composer /vendor ./
COPY . ./

RUN usermod -u $UID www-data
RUN composer run-script auto-scripts

RUN mkdir -p var/log && mkdir -p var/cache
RUN chown -R www-data:www-data var/log && chown -R www-data:www-data var/cache

COPY docker-image/nginx.conf /etc/nginx/sites-enabled/default
COPY docker-image/entrypoint.sh /usr/local/bin/docker-entrypoint
COPY docker-image/platform.prod.ini $PHP_FPM_INI_DIR/conf.d/platform.ini

RUN mkdir -p /sock
RUN rm /usr/local/etc/php-fpm.d/*
COPY docker-image/php.conf /usr/local/etc/php-fpm.d/

ENTRYPOINT ["tini", "docker-entrypoint", "--"]

CMD []


FROM production as development

RUN pecl install xdebug-3.1.5
COPY docker-image/xdebug.ini "/usr/local/etc/php/conf.d/xdebug.ini"
