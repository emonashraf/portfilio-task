// app/components/Container.jsx
const Container = ({ children, className = "" }) => {
    return (
        <div className={`mx-auto p-0 m-0 max-w-[1400px] w-full ${className}`}>
            {children}
        </div>
    );
};

export default Container;