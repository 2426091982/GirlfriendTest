import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';
// 导入 css 样式 (写成行内了)
// import "./Problem.css"
// 问题表单
export default function Problem(props) {
    let { item, i, changeArray } = props;
    // 输入显示的值
    const [inpValue, setInpValue] = useState("");
    // 实际显示的值
    const [activeValue, setActiveValue] = useState(null);

    // 输入框值改变
    const onInputChange = (event, newValue) => {
        setInpValue(newValue)
        // inpValue = newValue;
    }

    useEffect(() => {
        // 改变后添加到答案数组
        changeArray.array[i] = {
            title: item.title,
            activeValue
        };
    }, [activeValue, changeArray, i, item])

    // 选项值改变
    const onChange = (event, newValue) => {
        if (newValue) {
            setActiveValue(newValue.label)
        } else {
            setActiveValue(null)
        }
    }
    // 检查值
    const checkValue = (option, value) => {

        return option.label === value

    }

    return (
        // 返回一个带问题的文本框
        <Autocomplete
            key={i}
            isOptionEqualToValue={checkValue}
            value={activeValue}
            inputValue={inpValue}
            onChange={onChange}
            onInputChange={onInputChange}
            disablePortal
            id={JSON.stringify(i)}
            options={item.answerOption}
            sx={{ width: '100%', mt: "10px", my: '30px' }}
            renderInput={(params) => <TextField {...params} label={item.title} />}
        />
    )
}