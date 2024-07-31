
import {FC} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

const Item5: FC = () => {
  return (
    <div className='timeline-item'>
      <div className='timeline-line w-40px'></div>

      <div className='timeline-icon symbol symbol-circle symbol-40px'>
        <div className='symbol-label bg-light'>
          <KTIcon iconName='pencil' className='fs-2 text-gray-500' />
        </div>
      </div>

      <div className='timeline-content mb-10 mt-n1'>
        <div className='pe-3 mb-5'>
          <div className='fs-5 fw-bold mb-2'>3 new application design concepts added:</div>

          <div className='d-flex align-items-center mt-1 fs-6'>
            <div className='text-muted me-2 fs-7'>Created at 4:23 PM by</div>

            <div
              className='symbol symbol-circle symbol-25px'
              data-bs-toggle='tooltip'
              data-bs-boundary='window'
              data-bs-placement='top'
              title='Marcus Dotson'
            >
              <img src={toAbsoluteUrl('media/avatars/300-2.jpg')} alt='img' />
            </div>
          </div>
        </div>

        <div className='overflow-auto pb-5'>
          <div className='d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7'>
            <div className='overlay me-10'>
              <div className='overlay-wrapper'>
                <img
                  alt='img'
                  className='rounded w-200px'
                  src={toAbsoluteUrl('media/stock/600x400/img-29.jpg')}
                />
              </div>

              <div className='overlay-layer bg-dark bg-opacity-10 rounded'>
                <a href='#' className='btn btn-sm btn-primary btn-shadow'>
                  Explore
                </a>
              </div>
            </div>

            <div className='overlay me-10'>
              <div className='overlay-wrapper'>
                <img
                  alt='img'
                  className='rounded w-200px'
                  src={toAbsoluteUrl('media/stock/600x400/img-31.jpg')}
                />
              </div>

              <div className='overlay-layer bg-dark bg-opacity-10 rounded'>
                <a href='#' className='btn btn-sm btn-primary btn-shadow'>
                  Explore
                </a>
              </div>
            </div>

            <div className='overlay'>
              <div className='overlay-wrapper'>
                <img
                  alt='img'
                  className='rounded w-200px'
                  src={toAbsoluteUrl('media/stock/600x400/img-40.jpg')}
                />
              </div>

              <div className='overlay-layer bg-dark bg-opacity-10 rounded'>
                <a href='#' className='btn btn-sm btn-primary btn-shadow'>
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Item5}
