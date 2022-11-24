// Imports
import { useState, useEffect } from 'react';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import { LogsScreen } from '../';


// Component start
const LogsScreenContainer = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const getData = () => {
        fetch('./data/logs.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(data);
                setData(res);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {isLoading ? <Spinner animation="grow" /> : <LogsScreen data={data} />}
        </div>
    );
}

// Exports
export default LogsScreenContainer;