
import React from 'react'
import {KTIcon} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const TablesWidget3: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Files</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 100 pending files</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='category' className='fs-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr>
                <th className='p-0 w-50px'></th>
                <th className='p-0 min-w-150px'></th>
                <th className='p-0 min-w-140px'></th>
                <th className='p-0 min-w-120px'></th>
                <th className='p-0 min-w-40px'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label bg-light-success'>
                      <KTIcon iconName='basket' className='fs-2x text-success' />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                    Top Authors
                  </a>
                </td>
                <td className='text-end text-muted fw-semibold'>ReactJs, HTML</td>
                <td className='text-end text-muted fw-semibold'>4600 Users</td>
                <td className='text-end text-gray-900 fw-bold fs-6 pe-0'>5.4MB</td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label bg-light-danger'>
                      <KTIcon iconName='category' className='fs-2x text-danger' />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                    Popular Authors
                  </a>
                </td>
                <td className='text-end text-muted fw-semibold'>Python, MySQL</td>
                <td className='text-end text-muted fw-semibold'>7200 Users</td>
                <td className='text-end text-gray-900 fw-bold fs-6 pe-0'>2.8MB</td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label bg-light-info'>
                      <KTIcon iconName='briefcase' className='fs-2x text-info' />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                    New Users
                  </a>
                </td>
                <td className='text-end text-muted fw-semibold'>Laravel, Metronic</td>
                <td className='text-end text-muted fw-semibold'>890 Users</td>
                <td className='text-end text-gray-900 fw-bold fs-6 pe-0'>1.5MB</td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label bg-light-warning'>
                      <KTIcon iconName='abstract-26' className='fs-2x text-warning' />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                    Active Customers
                  </a>
                </td>
                <td className='text-end text-muted fw-semibold'>AngularJS, C#</td>
                <td className='text-end text-muted fw-semibold'>4600 Users</td>
                <td className='text-end text-gray-900 fw-bold fs-6 pe-0'>5.4MB</td>
              </tr>
              <tr>
                <td>
                  <div className='symbol symbol-50px me-2'>
                    <span className='symbol-label bg-light-primary'>
                      <KTIcon iconName='abstract-41' className='fs-2x text-primary' />
                    </span>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-gray-900 fw-bold text-hover-primary mb-1 fs-6'>
                    Active Customers
                  </a>
                </td>
                <td className='text-end text-muted fw-semibold'>ReactJS, Ruby</td>
                <td className='text-end text-muted fw-semibold'>354 Users</td>
                <td className='text-end text-gray-900 fw-bold fs-6 pe-0'>500KB</td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget3}
