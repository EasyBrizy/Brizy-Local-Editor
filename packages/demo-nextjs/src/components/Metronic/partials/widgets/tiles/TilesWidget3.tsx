
import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className?: string
  bgColor?: string
  title?: string
  title2?: string
}
const TilesWidget3 = ({
  className,
}: Props) => {
  return (
    <div
      className={clsx('card h-100 bgi-no-repeat bgi-size-cover', className)}
      style={{backgroundImage: `url("${toAbsoluteUrl('media/misc/bg-2.jpg')}")`}}
    >
      {/* begin::Body */}
      <div className='card-body d-flex flex-column justify-content-between'>
        {/* begin::Title */}
        <div className='text-white fw-bold fs-2'>
          <h2 className='fw-bold text-white mb-2'>Create Reports</h2>
          With App
        </div>
        {/* end::Title */}

        {/* begin::Link */}
        <a href='#' className='text-warning fw-semibold'>
          Create Report
          <KTIcon className='fs-2 text-warning' iconName='arrow-right' />
        </a>
        {/* end::Link */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TilesWidget3}
