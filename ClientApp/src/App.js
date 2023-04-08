import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './elements/Layout';
import './custom.css';


class App extends React.Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <Layout>
                    <Routes>
                        {AppRoutes.map((route, index) => {
                            const { element, ...rest } = route;
                            return <Route key={index} {...rest} element={element} />;
                        })}
                    </Routes>
                </Layout>
            </div>
        );
    }
}

export default App;
