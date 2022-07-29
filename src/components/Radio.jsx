import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function ErrorRadios(props) {
    let { item } = props;
    // 设置选中的值
    const [value, setValue] = React.useState('');
    // 设置错误信息或者成功信息
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('请选择您的答案');

    // 回答选项改变
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    // 点击查看答案
    const handleSubmit = (event) => {
        let trueAnswer = item.options[item.answer];
        event.preventDefault();

        if (value === trueAnswer) {
            setHelperText(item.successText);
            setError(false);
        } else if (value !== '') {
            setHelperText(item.errorText)
            setError(true);
        } else {
            setHelperText('你没有填选项哦');
            setError(true);
        }
    };

    return (
        // 问题组件
        <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 3 }} error={error} variant="standard">
                {/* label 问题 */}
                <FormLabel id="demo-error-radios">{item.title}</FormLabel>
                {/* 选择框 */}
                <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name={item.title}
                    value={value}
                    onChange={handleRadioChange}
                >
                    {
                        item.options.map((item, i) => {
                            return <FormControlLabel value={item} key={i} control={<Radio />} label={item} />
                        })
                    }

                </RadioGroup>
                {/* 提示文字 */}
                <FormHelperText sx={{ color: '#1976d2', fontWeight: 700 }}>{helperText}</FormHelperText>
                <Button sx={{ mt: 1, mr: 1, width: '150px' }} type="submit" variant="outlined">
                    查看答案
                </Button>
            </FormControl>
        </form>
    );
}
