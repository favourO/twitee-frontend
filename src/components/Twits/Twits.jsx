import React from 'react';
import { useSelector } from 'react-redux';


import Twit from './Twit';
import Loader from '../Loader';

const Twits = ({ setCurrentId }) => {
    const twits = useSelector((state) => state.twits);

    return (
        !twits.length ? Loader : (
            <div>
                {
                    twits.map((twit) => (
                        <div>
                            <Twit twit={twit} setCurrentId={setCurrentId} />
                        </div>
                    ))
                }
            </div>
        )
    )
}

export default Twits;