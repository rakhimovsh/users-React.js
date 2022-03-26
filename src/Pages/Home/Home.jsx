import React from "react";
import LeftSide from "../../Components/1.LeftSide/LeftSide";
import Middle from "../../Components/2.Middle/Middle";

function Home() {
    return (
        <main className="d-flex">
            <LeftSide />
            <Middle />
        </main>
    )
}

export default Home;