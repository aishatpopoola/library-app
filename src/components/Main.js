import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children, title }) => (
    <main className="p-10 m-10">
        {title && (
            <div className="mb-10 mt-10">
                <h2 className="text-center">{title}</h2>
            </div>
        )}
        {children}
    </main>
);

Main.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
export default Main;
