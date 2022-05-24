import { useEffect } from 'react';
import Router from 'next/router';

import { LoadingView } from 'app/views';

const Index = () => {
    useEffect(() => { Router.push('/home'); }, [false]);

    return (
        <LoadingView background="blue" />
    );
};

export default Index;
