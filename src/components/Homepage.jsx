import React, { useEffect, useState } from "react";
import millify from "millify";
import { Typography, Form, Input, Button, } from "antd";
import { Link } from 'react-router-dom'
import Loader from './Loader';
import Twit from '../components/Twits/Twit';
import axios from 'axios';




const { Title } = Typography;

const Homepage = () => {
    const [twits, setTwits] = useState('');

    const url = 'http://localhost:4000/api/twitee/twits';

    useEffect(() => {
        getTwits()
    }, [])
    
    const getTwits = async () => {
        try {
            const res = await axios.get(url);
        
            const allTwits = res.data.data;
            setTwits(allTwits);
        } catch (error) {
            console.log(error)
        }
    }

   
    

    return (
        <>
            <Form>
                <Typography.Text>
                    Write Something
                </Typography.Text>
                <Form.Item label="Twit">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Twit twits={twits} />
        </>
    )
}

export default Homepage;