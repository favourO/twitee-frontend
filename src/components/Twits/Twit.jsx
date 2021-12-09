import React, { useState } from 'react'
import { Space, Card, Button } from 'antd'
import moment from 'moment';

import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function Twit(props) {
    const url = 'http://localhost:4000/api/twitee/twits';
    const [like, setLike] = useState(0);

    const likeTwit = async (id) => {
        try {
            const res = await axios.patch(`${url}/${id}/likes`);
            setLike(res)
        } catch (error) {
            console.log(error)
        }
    }

    const display = (props) => {
        const {twits} = props;

        if (twits.length > 0) {
            return (
                twits.map((twit, index) => {
                    console.log(twit);
                    return (
                        <Space direction="vertical">
                            <Card style={{ width: 300 }}>
                                <p>{twit.title}</p>
                                <p>{moment(twit.createdAt).fromNow()}</p>
                                <Button>Comment</Button>
                                <Button onClick={() => likeTwit(twit._id)}>{twit.likes} likes</Button>
                            </Card>
                            
                        </Space>
                        
                    )
                })
            )
        } else {
            return (<h3>No Twits yet</h3>)
        }
    }

    return (
        <>
            {display(props)}
        </>
    )
}