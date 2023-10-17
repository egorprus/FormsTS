import { Suspense, lazy } from "react";
import { useNeedRenderIPForm } from "../../../../hooks/useNeedRenderIPForm";

const OOOFormContent = lazy(() => import("./OOOFormContent"));

export const OOOForm = () => {
  const { needRender } = useNeedRenderIPForm();

  return <Suspense fallback={null}>
    {needRender ? <OOOFormContent /> : null}
  </Suspense>;
};
