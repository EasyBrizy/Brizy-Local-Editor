import React, { ReactElement } from "react";

interface Props {
  params: {
    slug: string;
  };
}

const PreviewPage = (props: Props): ReactElement => {
  return <div>Preview Page</div>;
};

export default PreviewPage;
