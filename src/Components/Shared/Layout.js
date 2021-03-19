import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from './Header'
import Content from '../Pages/Content/Content';
import './layout.css'

// This file will contain the <Layout/> component, made up of the <Header/> and the <Content/>.

// Return the Layout Component
const Layout = ({ page }) => {

    return (
        <div className="layoutComponent">
            <LayoutContent value={viewPages[page]} />
        </div>
    )
}
// Generate the logic for the Layout Component.
// This will include the page, header if visible, and title.
var LayoutContent = (props) => 
{
    let viewPage = props.value.page;
    let headerVisible = props.value.mod.header;
    let titleValue = props.value.mod.title;
    let header;

    if (headerVisible) {
        header = <NavigationBar />;
    }
    
    return (
        <div>
            {header}
            <Content page={viewPage} title={titleValue}/>
        </div>
    )
}

// Abstract this, it looks ugly here
var viewPages =
    [
        {
            page: "landingPage",
            mod: { header: false, title: "Start" }
        }, 
        {
            page: "storySequencePage",
            mod: { header: false, title: "Story Sequence Goes Here" }
        }, 
        {
            page: "mainMenuPage",
            mod: { header: true, title: "Main Menu" }
        }, 
        {
            page: "helpPage",
            mod: { header: true, title: "Help Page" }
        }, 
        {
            page: "puzzleProgressPage",
            mod: { header: true, title: "Puzzle" }
        }, 
        {
            page: "puzzleCompletePage",
            mod: { header: true, title: "Puzzle Complete" }
        },
        {
            page: "endSequencePage",
            mod: { header: false, title: "End of Game" }
        }, 
    ];

// Connect to store and couple Layout component with currentViewPage store
const getCurrentViewPage = (appState) => {
    return ({
        page: appState.currentViewPage.viewPage
    })

}

export default connect(getCurrentViewPage)(Layout)
