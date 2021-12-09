import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd'

import { Navbar, Login, Homepage, Register} from './components';
import './App.css'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div>
                
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/register">
                                <Register />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                {/* <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
                        CryptoHub <br />
                        All rights reserved 2021 &copy;
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div> */}
            </div>
        </div>
    )
}

export default App;