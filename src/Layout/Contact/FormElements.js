import React from 'react';

import FormElement from './FormElement';


const formElements = props => {
    const elementes = [];
    props.formConfig.map((item, index) => {
        return elementes.push(
            <FormElement
                key={item.id}
                animationSide={index % 2
                    ? '-100%'
                    : '+100%'
                }
                showForm={props.showForm}
                animationDelay={index * .2}
                htmlTag={item.htmlTag}
                class={item.className}
                type={item.type}
                validation={props.emailValidation[item.id]}
                placeholder={typeof (item.placeholder) !== 'object'
                    ? item.placeholder
                    : props.placeholders[item.id].placeholder.end}
                onChangeElement={props.onChangeElement}
                itemValue={props.values[item.id]}
            />
        )
    })

    return elementes
}

export default formElements;