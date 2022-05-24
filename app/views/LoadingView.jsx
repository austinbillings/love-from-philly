import { MainLayout } from 'app/layouts';

export const LoadingView = ({ background = 'blackAlt' }) => {
    return (
        <MainLayout
            backgroundId={background}
            headerProps={{ hideLogo: false }}>
            <section className="stack items-center justify-center" style={{ minHeight: '75vh' }}>
                <img src="/welcome.png" alt="Welcome to 30 Amp Circuit" style={{ width: '300px', maxWidth: '80vw' }} className="self-stretch"/>
                <em className="text-white">Loading...</em>
            </section>
        </MainLayout>
    )
}
