import React from 'react';
import { Input, InputContainer, Icon } from './SearchTweet.style';

const SearchTweet = () => {
    return (
        <div>
            <InputContainer>
                <Icon />
                <Input placeholder="Search Twitter" type="text" />
            </InputContainer>
            
        </div>
    )
}

export default SearchTweet
