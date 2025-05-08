export const MEDIA_UPLOAD_ROOT_CLASSNAME = "media-upload-root";

// CREDENTIALS ENDPOINT
export const GET_USER_CONFIG_ENDPOINT_URL = "https://admin.brizy.io/dev/media-upload-third-party-elements-access";
export const DEV_GET_USER_CONFIG_ENDPOINT_URL = GET_USER_CONFIG_ENDPOINT_URL;

// REQUEST BASE URL
export const API_URL = "https://admin.brizy.io/api/2.0/projects";
export const DEV_API_URL = API_URL;

// RESIZE URL
export const RESIZE_URL = "https://cloud-1de12d.b-cdn.net/media";
export const DEV_RESIZE_URL = RESIZE_URL;

// RESIZE PATTERNS
export const RESIZE_PATTERNS = {
  full: "{{ [baseUrl] }}/{{ iW=[iW] }}&{{ iH=[iH] }}&{{ oX=[oX] }}&{{ oY=[oY] }}&{{ cW=[cW] }}&{{ cH=[cH] }}/{{ [uid] }}/{{ [fileName] }}",
  original: "{{ [baseUrl] }}/{{ [sizeType] }}/{{ [uid] }}/{{ [fileName] }}",
  split: "{{ [baseUrl] }}/{{ iW=[iW] }}&{{ iH=[iH] }}/{{ [uid] }}/{{ [fileName] }}",
};
export const DEV_RESIZE_PATTERNS = RESIZE_PATTERNS;
