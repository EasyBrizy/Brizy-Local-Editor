import { FC } from "react";

export const NotFound: FC = () => (
  <tr>
    <td colSpan={7}>
      <div className="d-flex text-center w-100 align-content-center justify-content-center">
        No matching records found
      </div>
    </td>
  </tr>
);
