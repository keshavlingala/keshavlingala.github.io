import Layout from "../layouts/layout";
import React from "react";
import {Container, NotFound} from "../components/CustomComponents";

export default ()=>{
    return (
        <Layout>
           <Container>
               <NotFound/>
           </Container>
        </Layout>
    )
}
