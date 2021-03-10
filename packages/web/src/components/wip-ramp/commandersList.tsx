import React from "react";
import {
    Card,
    Col,
    Row,
    Image,
    List,
    Divider,
    Avatar,
    Descriptions,
    Badge,
    Space,
    Breadcrumb,
    Menu,
} from "antd";
import myBgnd from "/resources/commanderImage/placeholder.svg";
import { ClockCircleOutlined } from "@ant-design/icons";
import { getCommanderByRaces, getCommanderData } from "../../coh/commanders";
import { useParams } from "react-router";
import { CommanderData, RaceName } from "../../coh/types";

export const CommandersList = () => {
    const { race } = useParams<{
        race: string;
    }>();

    let myData = getCommanderByRaces(race as RaceName);
    myData = myData.filter((commanderData) => {
        return (
            commanderData["commanderName"] != "undefined" &&
            commanderData["description"] != "undefined"
        );
    });

    if (myData.length === 0) {
        return (
            <>
                <h1>Race {race} here was not found.</h1>
            </>
        );
    }

    return (
        <>
            <div>
                <Row>
                    <Col span={6}> </Col>
                    <Col span={12}>
                        <List
                            itemLayout="horizontal"
                            dataSource={myData}
                            renderItem={(item) => (
                                <div>
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={
                                                <div>
                                                    <Avatar
                                                        src="/resources/commanderImage/placeholder.svg"
                                                        shape="square"
                                                        size={64}
                                                    />
                                                </div>
                                            }
                                            title={item.commanderName}
                                            description={item.description}
                                        />
                                    </List.Item>
                                </div>
                            )}
                        />
                    </Col>
                    <Col span={6}> </Col>
                </Row>
            </div>
        </>
    );
};
