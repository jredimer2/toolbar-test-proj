import React, { useState, Component } from 'react';
import { Page, Card, Button } from '@shopify/polaris';

class TestComponent extends Component {

    render() {
        return (
            <div>
                <Page title="Testing ">
                    <Card >
                       <Button>Click to Open Test 2 page</Button>
                    </Card>

                </Page>
            </div>
        )
    }
}

export default TestComponent;