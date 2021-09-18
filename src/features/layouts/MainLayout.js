import React from 'react'
//import MainHeader from '../components/header/MainHeader'
//import MainFooter from '../components/footer/MainFooter'

function MainLayout(props) {
    return (
        <div>
            {/*<MainHeader {...props} />*/}
            <div>
                {props.children}
            </div>
            {/*<MainFooter />*/}
        </div>
    )
}

export default MainLayout
