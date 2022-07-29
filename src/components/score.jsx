// 根据返回的值展示出分数
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// 排版组件
import Typography from '@mui/material/Typography';

export default function Score(props) {
    return (
        <>  
        {/* 得分组件 显示传入的分数 */}
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: "22px" }} color="text.secondary" gutterBottom>
                        姗姐的得分为：
                    </Typography>
                    <Typography sx={{ fontSize: "22px" }} color="text.secondary" gutterBottom>
                        {props.score}
                    </Typography>

                </CardContent>
            </Card>
        </>
    )
}