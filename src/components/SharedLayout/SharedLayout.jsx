import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () =>
    <>
        <Suspense>
            <Outlet />
        </Suspense>
    </>

export default SharedLayout;