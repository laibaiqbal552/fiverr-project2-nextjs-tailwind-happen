import React from "react";
import Layout from "../../components/Layout/Layout";
import Events from "./Events";
import EventsStages from "./EventsStages";
import Explore from "./Explore";
import Header from "./Header";
import SignUp from "./SignUp";

function Index() {
  return (
    <div className="bg-bgBlack overflow-hidden">
      <Layout>
        <Header />
        <Events />
        <EventsStages />
        <Explore />
        <SignUp />
      </Layout>
    </div>
  );
}

export default Index;
