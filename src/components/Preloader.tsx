const Preloader: React.FC = () => {
    return (
        <div className="preloader flex-column justify-content-center align-items-center">
            <img className="animation__shake" src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" height="60" width="60" />
        </div>
    );
};

export default Preloader;