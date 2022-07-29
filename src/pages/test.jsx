import React, { useState } from 'react';
// import ReactDom from 'react-dom'
import Button from '@mui/material/Button';
// 问题组件1
import Problem from '../components/Problem'
// 问题组件2
import Radio from '../components/Radio'
// 评分组件
import Rating from '@mui/material/Rating';
// 排版组件
import Typography from '@mui/material/Typography';
// 悬浮组件
import Fab from '@mui/material/Fab';
// 盒子组件
import Box from '@mui/material/Box';
// 爱心图标1
import FavoriteIcon from '@mui/icons-material/Favorite';
// 爱心图标2
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// 样式覆盖方案
import { styled } from '@mui/material/styles';
// 标准答案组件
import TextField from '@mui/material/TextField';
// 得分组件
import Score from "../components/score"

// 样式覆盖评分组件
const StyleRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
})


// 考试页面
export default function Test() {
    // 回答的选项
    const answer = [
        {
            title: '以下哪个选项是嘉哥的净身高',
            // 选项
            answerOption: [
                {
                    label: '158cm及以下',
                    value: '158cm及以下'
                },
                {
                    label: '159cm-165cm',
                    value: '159cm-165cm'
                },
                {
                    label: '166cm-179cm',
                    value: '166cm-179cm'
                },
                {
                    label: '180cm以上',
                    value: '180cm以上'
                },

            ],
            trueOptionIndex: 3
        },
        {
            title: '嘉哥生气了，你应该怎么做?',
            // 选项
            answerOption: [
                {
                    label: '让他自己冷静冷静',
                    value: '让他自己冷静冷静'
                },
                {
                    label: '抱住他安慰他',
                    value: '抱住他安慰他'
                },
                {
                    label: '跟他讲道理，分析问题',
                    value: '跟他讲道理，分析问题'
                },
                {
                    label: '比他更生气',
                    value: '比他更生气'
                },

            ],
            trueOptionIndex: 0
        },
        {
            title: '嘉哥最喜欢吃哪个部位的肉',
            // 选项
            answerOption: [
                {
                    label: '鸡腿',
                    value: '鸡腿'
                },
                {
                    label: '猪腱子前腿第一块',
                    value: '猪腱子前腿第一块'
                },
                {
                    label: '牛扒',
                    value: '牛扒'
                },
                {
                    label: '以上三个都喜欢',
                    value: '以上三个都喜欢'
                },

            ],
            trueOptionIndex: 3
        },
        {
            title: '嘉哥最喜欢吃的水果是?',
            // 选项
            answerOption: [
                {
                    label: '荔枝',
                    value: '荔枝'
                },
                {
                    label: '榴莲',
                    value: '榴莲'
                },
                {
                    label: '龙眼',
                    value: '龙眼'
                },
                {
                    label: '红色的番石榴',
                    value: '红色的番石榴'
                },

            ],
            trueOptionIndex: 0
        },
        {
            title: '跟嘉哥聊天聊到一半，有事情要忙怎么办？',
            // 选项
            answerOption: [
                {
                    label: '赶紧结束对话，忙自己的事情',
                    value: '赶紧结束对话，忙自己的事情'
                },
                {
                    label: '给嘉哥发个信息，解释了再去',
                    value: '给嘉哥发个信息，解释了再去'
                },
                {
                    label: '忙完了回来继续聊并解释',
                    value: '忙完了回来继续聊并解释'
                },
                {
                    label: '不回信息',
                    value: '不回信息'
                },

            ],
            trueOptionIndex: 0
        },
        {
            title: '嘉哥最喜欢吃什么',
            // 选项
            answerOption: [
                {
                    label: '妈妈做的饭',
                    value: '妈妈做的饭'
                },
                {
                    label: '麦当劳套餐',
                    value: '麦当劳套餐'
                }
            ],
            trueOptionIndex: 1
        },
        {
            title: '嘉哥最喜欢哪个歌手?',
            // 选项
            answerOption: [
                {
                    label: '周杰伦',
                    value: '周杰伦'
                },
                {
                    label: '陈奕迅',
                    value: '陈奕迅'
                },
                {
                    label: '黄家驹',
                    value: '黄家驹'
                },
                {
                    label: '林俊杰',
                    value: '林俊杰'
                }

            ],
            trueOptionIndex: 2
        },
        {
            title: '嘉哥安踏篮球鞋穿多大的鞋子',
            // 选项
            answerOption: [
                {
                    label: '46',
                    value: '46'
                },
                {
                    label: '45',
                    value: '45'
                },
                {
                    label: '45.5',
                    value: '45.5'
                },
                {
                    label: '44',
                    value: '44'
                }
            ],
            trueOptionIndex: 2
        },
        {
            title: '嘉哥最喜欢哪个品牌的做的鞋子?',
            // 选项
            answerOption: [
                {
                    label: '阿迪达斯',
                    value: '阿迪达斯'
                },
                {
                    label: 'Nike',
                    value: 'Nike'
                },
                {
                    label: '安踏',
                    value: '安踏'
                },
                {
                    label: '李宁',
                    value: '李宁'
                },
                {
                    label: '匹克',
                    value: '匹克'
                },
            ],
            trueOptionIndex: 3
        },
        {
            title: '嘉哥那些行为是真生气了?',
            // 选项
            answerOption: [
                {
                    label: '哼，不理你了.',
                    value: '哼，不理你了.'
                },
                {
                    label: '嗯',
                    value: '嗯'
                },
                {
                    label: '不说话',
                    value: '不说话'
                },
                {
                    label: '你什么意思?',
                    value: '你什么意思?'
                },
                {
                    label: '行行行',
                    value: '行行行'
                }

            ],
            trueOptionIndex: 2
        },
    ]
    // 点击的选项
    const radioArray = [
        {
            title: '嘉哥喜欢吃老干妈吗?',
            options: ['Yes', 'No'],
            answer: 0,
            successText: '老干妈拌饭，天下一流~',
            errorText: '这么香的老干妈我怎么会讨厌她？',
        },
        {
            title: '嘉哥喜欢吃红枣酸奶吗?',
            options: ['Yes', 'No'],
            answer: 1,
            successText: '哈哈哈哈，还是挺了解我的嘛',
            errorText: '喝不下呀，喝完头晕~~~',
        },
        {
            title: '嘉哥说好累想睡觉，是不是真的想睡觉?',
            options: ['Yes', 'No'],
            answer: 0,
            successText: '肯定是想睡觉啦，困死了撑不住了~~',
            errorText: '行行行，陪姗姐聊到通宵。',
        },
        {
            title: '嘉哥最喜欢姗姐表扬他什么?',
            options: ['好Man', '好帅'],
            answer: 0,
            successText: '呵，算你识趣。',
            errorText: '不用一直夸我，我自己知道的。',
        },
        {
            title: '嘉哥就业的岗位是什么岗位?',
            options: ['后端', '前端'],
            answer: 1,
            successText: '嘉哥只是一个只会复制粘贴的码农',
            errorText: '我也想成为后端大佬啊~~',
        },
        {
            title: '嘉哥最喜欢喝什么?',
            options: ['可乐', '纯牛奶'],
            answer: 1,
            successText: '猜猜为什么嘉哥突然飙起来了?',
            errorText: '经常喝可乐可是会杀精的哦!',
        },
    ]

    // 用户答案数组
    const [array, setArray] = useState([]);
    // 正确答案
    const [trueAnswer, setTrueAnswer] = useState([])
    // 评分 0 ~ 5
    const [liking, setLiking] = useState(1);
    // 是否提交答案
    const [isSubmit, setIsSubmit] = useState(false);
    // 得分
    const [score, setScore] = useState(0);
    // 提交
    const submit = () => {
        if (!isSubmit) {
            // 第一次提交答案

            // 设置为已提交
            setIsSubmit(true)
            // 好感度多少默认底分是多少
            setScore(pre => pre + liking)
            // 打印女朋友选择的答案
            console.log('答案', array)
            // 打印评分
            console.log('好感度:' + liking)

        } else {
            // 已经提交过答案了

        }

    }
    // 查看答案
    const showAnswer = () => {

        // 设置值
        setTrueAnswer(() => {
            return answer.map((item, i) => {
                // 问题
                let title = item.title;
                // 正确的答案
                let answer = item.answerOption[item.trueOptionIndex].label;
                // 回答的答案
                let activeValue = (array[i] && array[i].activeValue) || '没有回答';
                // 答案是否正确 布尔值
                let isTrue = answer === activeValue;
                // 正确就加分
                if (isTrue) {
                    // 每一题的分数
                    let num = 100 / (answer.length + 1)
                    setScore(pre => num + pre)
                }
                return {
                    title,
                    answer,
                    activeValue,
                    isTrue
                }
            })
        })
    }
    // 返回组件
    return (
        <>
            <div className="main">
                <Typography sx={{ mt: 5, mb: 5, textAlign: "center" }} variant="h4" component="div" gutterBottom>
                    2022满分女友测试题（姗姐定制卷）
                </Typography>
                {
                    // 渲染题目1
                    answer.map((item, i) => < Problem changeArray={{
                        setArray,
                        array
                    }} item={item} i={i} key={i} />)
                }
                {/* 评分系统 */}
                <Box sx={{ textAlign: 'center', mt: 5 }}>
                    <Typography component="p" variant="h6" gutterBottom>对嘉哥的好感度</Typography>
                    <StyleRating
                        color='primary'
                        name="simple-controlled"
                        value={liking}
                        onChange={(event, newValue) => {
                            setLiking(newValue);
                        }}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                </Box>
                {/* 答案按钮 */}
                <Box sx={{ m: 5, display: 'flex', justifyContent: "space-around" }}>
                    <Button onClick={submit} disabled={isSubmit} sx={{}} variant="contained">提交答卷</Button>
                    <Fab variant="extended" onClick={showAnswer} sx={{ borderRadius: 1, display: isSubmit ? "block" : "none" }} color="secondary">
                        查看答案
                    </Fab>
                </Box>
                <Box>
                    {
                        // 答案组件
                        trueAnswer.map((item, i) => {
                            // console.log(item)
                            return (
                                <TextField label={item.title} color={item.isTrue ? 'success' : 'error'} key={i} sx={{
                                    my: 1, '& .MuiFormHelperText-root': {
                                        color: '#2e7d32',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: item.isTrue ? '#2e7d32' : '#d32f2f',
                                    },

                                }} InputProps={{
                                    readOnly: true,
                                }} variant="filled" fullWidth helperText={item.isTrue ? '' : `正确答案：${item.answer}`} defaultValue={item.activeValue} focused />
                            )
                        })
                    }
                </Box>
                {/* 展示得分组件 */}
                <Box sx={{ display: isSubmit ? "block" : "none" }}>
                    <Score score={score} ></Score>
                </Box>

                <Typography sx={{ mt: 5, mb: 5, textAlign: "center" }} variant="h5" component="div" gutterBottom>
                    挽救男友附加题
                </Typography>
                {
                    // 渲染题目二
                    radioArray.map((item, i) => < Radio item={item} i={i} key={i} />)
                }
            </div>
        </>
    )
}



