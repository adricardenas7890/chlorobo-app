import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from './Header'
import Content from '../Pages/Content/Content';
import './layout.css'
import viewPages  from './ViewPages';

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
        <>
            {header}
            <Content page={viewPage} title={titleValue}/>
        </>
    )
}

// Connect to store and couple Layout component with currentViewPage store
const getCurrentViewPage = (appState) => {
    return ({
        page: appState.currentViewPage.viewPage
    })

}

export default connect(getCurrentViewPage)(Layout)
