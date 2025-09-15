import React from 'react';
import { View } from "react-native";
import Post from "./post";

export function ListaPosts({posts}) {
    return (
        <View>            {posts.map((post, index) => {
                return (
                <Post key={index} title={post.title} content={post.content} autor={post.autor} />
                )
            })}

        </View>
    );
}