import Image from "next/image";
import { FC } from "react";
import { KTIcon, toStaticUrl } from "../../../helpers";

const Item3: FC = () => {
  return (
    <div className="timeline-item">
      <div className="timeline-line w-40px"></div>

      <div className="timeline-icon symbol symbol-circle symbol-40px">
        <div className="symbol-label bg-light">
          <KTIcon iconName="disconnect" className="fs-2 text-gray-500" />
        </div>
      </div>

      <div className="timeline-content mb-10 mt-n1">
        <div className="mb-5 pe-3">
          <a href="#" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">
            3 New Incoming Project Files:
          </a>

          <div className="d-flex align-items-center mt-1 fs-6">
            <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>

            <div
              className="symbol symbol-circle symbol-25px"
              data-bs-toggle="tooltip"
              data-bs-boundary="window"
              data-bs-placement="top"
              title="Jan Hummer"
            >
              <Image width={100} height={100} src={toStaticUrl("media/avatars/300-23.jpg")} alt="img" />
            </div>
          </div>
        </div>

        <div className="overflow-auto pb-5">
          <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
            <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
              <Image width="100" height="100" alt="" className="me-3" src={toStaticUrl("media/svg/files/pdf.svg")} />

              <div className="ms-1 fw-bold">
                <a href="#" className="fs-6 text-hover-primary fw-bolder">
                  Finance KPI App Guidelines
                </a>

                <div className="text-gray-500">1.9mb</div>
              </div>
            </div>

            <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
              <Image width={30} height={30} alt="" className="me-3" src={toStaticUrl("media/svg/files/doc.svg")} />

              <div className="ms-1 fw-bold">
                <a href="#" className="fs-6 text-hover-primary fw-bolder">
                  Client UAT Testing Results
                </a>

                <div className="text-gray-500">18kb</div>
              </div>
            </div>

            <div className="d-flex flex-aligns-center">
              <Image
                width={30}
                height={30}
                alt=""
                className="w-30px me-3"
                src={toStaticUrl("media/svg/files/css.svg")}
              />

              <div className="ms-1 fw-bold">
                <a href="#" className="fs-6 text-hover-primary fw-bolder">
                  Finance Reports
                </a>

                <div className="text-gray-500">20mb</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Item3 };
