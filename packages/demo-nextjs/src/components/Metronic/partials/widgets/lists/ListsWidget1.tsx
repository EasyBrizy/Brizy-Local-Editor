
import { FC } from 'react'
import {KTIcon} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget1: FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-gray-900'>Tasks Overview</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Pending 10 tasks</span>
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
      <div className='card-body pt-5'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-success'>
              <KTIcon iconName='abstract-26' className='fs-2x text-success' />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-gray-900 text-hover-primary fs-6 fw-bold'>
              Project Briefing
            </a>
            <span className='text-muted fw-semibold'>Project Manager</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-warning'>
              <KTIcon iconName='pencil' className='fs-2x text-warning' />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-gray-900 text-hover-primary fs-6 fw-bold'>
              Concept Design
            </a>
            <span className='text-muted fw-semibold'>Art Director</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-primary'>
              <KTIcon iconName='message-text-2' className='fs-2x text-primary' />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-gray-900 text-hover-primary fs-6 fw-bold'>
              Functional Logics
            </a>
            <span className='text-muted fw-semibold'>Lead Developer</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-danger'>
              <KTIcon iconName='disconnect' className='fs-2x text-danger' />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-gray-900 text-hover-primary fs-6 fw-bold'>
              Development
            </a>
            <span className='text-muted fw-semibold'>DevOps</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center'>
          {/* begin::Symbol */}
          <div className='symbol symbol-50px me-5'>
            <span className='symbol-label bg-light-info'>
              <KTIcon iconName='security-user' className='fs-2x text-info' />
            </span>
          </div>
          {/* end::Symbol */}
          {/* begin::Text */}
          <div className='d-flex flex-column'>
            <a href='#' className='text-gray-900 text-hover-primary fs-6 fw-bold'>
              Testing
            </a>
            <span className='text-muted fw-semibold'>QA Managers</span>
          </div>
          {/* end::Text */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget1}
