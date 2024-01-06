import React from 'react'
import Styles from './messagehandler.module.css'

const SizeOptions = [
    { val: 'small', text: '작게' },
    { val: 'middle', text: '중간' },
    { val: 'large', text: '크게' },
]

const ColorOptions = [
    { val: 'white', text: 'white' },
    { val: 'black', text: 'black' },
]

const SortOptions = [
    { val: 'left', text: '왼쪽' },
    { val: 'middle', text: '중간' },
    { val: 'right', text: '오른쪽' },
]

const OptBtn = ({ attr, val, text, now, setVal }) => {
    const onBtnClick = () => {
        setVal(attr, val)
    }
    return (
        <div
            onClick={onBtnClick}
            className={` ${now === val && Styles.opt_focus} ${Styles.opt}`}
        >
            {text}
        </div>
    )
}

const OptBar = ({ attr, options, now, setVal }) => {
    return (
        <div className={Styles.option_bar}>
            {options.map((option) => (
                <OptBtn now={now} attr={attr} {...option} setVal={setVal} />
            ))}
        </div>
    )
}

export default function MessageHandler({
    content,
    size,
    color,
    sort,
    changeControlInfo,
}) {
    const setVal = (attr, val) => {
        changeControlInfo({
            [attr]: val,
        })
    }

    const onContentChange = (e) => {
        console.log(e.currentTarget.value)
        changeControlInfo({
            content: e.currentTarget.value,
        })
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.left}>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>글자 크기</div>
                    <OptBar
                        setVal={setVal}
                        options={SizeOptions}
                        attr="size"
                        now={size}
                    />
                </div>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>글자 색</div>
                    <OptBar
                        setVal={setVal}
                        options={ColorOptions}
                        attr="color"
                        now={color}
                    />
                </div>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>글자 정렬</div>
                    <OptBar
                        setVal={setVal}
                        options={SortOptions}
                        attr="sort"
                        now={sort}
                    />
                </div>
                <div className={Styles.submit_btn}>저장</div>
            </div>
            <div className={Styles.right}>
                <div className={Styles.input_container}>
                    <textarea
                        name="message"
                        id="message"
                        cols="20"
                        rows="6"
                        placeholder="입력해주세용"
                        value={content}
                        onChange={onContentChange}
                    ></textarea>
                    <div className={Styles.recommend_container}>
                        <div className={Styles.recommend_title}>
                            이런 문구는 어때영??
                        </div>
                        <div className={Styles.recommend_content}>
                            Lorem ipsum ..
                        </div>
                        <div className={Styles.recommend_switching_bar}>
                            <div className={Styles.bar_btn}>{'<'}</div>
                            <div className={Styles.recommend_count}>1 / 10</div>
                            <div className={Styles.bar_btn}>{'>'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
