import { Suspense, lazy } from "react";
import { useNeedRenderIPForm } from "../../../../hooks/useNeedRenderIPForm";

const IPFormContent = lazy(() => import("./IPFormContent"));

export const IPForm = () => {
  const { needRender } = useNeedRenderIPForm();

  return <Suspense fallback={null}>
    {needRender ? <IPFormContent /> : null}
  </Suspense>;
};
