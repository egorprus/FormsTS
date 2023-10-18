import { Suspense, lazy } from "react";
import { useNeedRenderOOOForm } from "../../../../hooks/useNeedRenderOOOForm";

const OOOFormContent = lazy(() => import("./OOOFormContent"));

export const OOOForm = () => {
  const { needRender } = useNeedRenderOOOForm();

  return <Suspense fallback={null}>
    {needRender ? <OOOFormContent /> : null}
  </Suspense>;
};
