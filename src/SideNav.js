import React from 'react';
import SideNav , {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';

function ResumeSideNav() {
    const navigate = useNavigate();
    return <SideNav
        onSelect={selected=> {
            navigate('/'+ selected);
        }}
        className='sidenav'
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className='fa fa-solid fa-house-chimney' style={{ fontSize: '1.5em' }} />
                    </NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="projects">
                    <NavIcon>
                        <i className='fa fa-solid fa-folder-open' style={{ fontSize: '1.5em' }} />
                    </NavIcon>
                    <NavText>Projects</NavText>
                </NavItem>
                <NavItem eventKey="skills">
                    <NavIcon>
                        <i className='fa fa-solid fa-lightbulb' style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>Skills</NavText>
                </NavItem>
                <NavItem eventKey="login">
                    <NavIcon>
                        <i className='fa fa-solid fa-user' style={{ fontSize: '1.5em' }} />
                    </NavIcon>
                    <NavText>Login</NavText>
                </NavItem>
                <NavItem eventKey="contact">
                    <NavIcon>
                        <i className='fa fa-solid fa-at' style={{ fontSize: '1.5em' }} />
                    </NavIcon>
                    <NavText>Contacts Me</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
}

export default ResumeSideNav;