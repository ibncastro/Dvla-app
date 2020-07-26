import React, { useState } from 'react'
import { Nav, Icon, Row, Col } from 'rsuite'


export default function SideNav({props}) {

  const [active, setActive] = useState('home');

  const handleSelect = (activeKey) => {
    setActive(activeKey)
  }

  const CustomNav = ({ active, onSelect, ...props }) => {
    return (
      <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={styles} >
        <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
          Home
        </Nav.Item>
        <Nav.Item eventKey="news">News</Nav.Item>
        <Nav.Item eventKey="solutions"> Solution </Nav.Item>
      </Nav>
    )
  }

  return (
    <Row>
      <Col md={4}>
        <CustomNav appearance="tabs" active={active} onSelect={handleSelect} />
      </Col>
    </Row>
  )
}

const styles = {
  width: 100
}