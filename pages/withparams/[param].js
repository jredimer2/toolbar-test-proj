import React, { Component, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Page, Link, Card, DataTable, EmptyState } from "@shopify/polaris";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function withParams(props) {

    const router = useRouter();

    console.log('>>>>>>> withparams.js  router.query =', router.query)

    const { param } = router.query

    const { state, setOption1, setOption2 } = useContext(GlobalContext);
    
    //useEffect(() => {
    //    console.log('>>>>>>> withparams.js  useEffect id =', id)
    //    setOption1({ id: 3, text: id2 });
    //}, []);

    console.log(">>>>>>>> withparams.js  state =", state);

    return (
        <EmptyState
            heading="Test page"
            action={{
                content: "Click to go to next page",
                onAction: () => {
                    console.log('>>>>>>> withparams.js  EmptyState.onAction param =', param)
                    setOption1({ id: 3, text: param });
                    router.push("/test3");
                },
            }}
            fullWidth
        ></EmptyState>
    );
}