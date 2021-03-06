import styled from 'styled-components'

export const StyledSelect = styled.select`
    border: none;
    outline: none;
    color: ${({ theme }) => theme.color.secondary};
    height: 25px;
    border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
    font-size: 15px;
    margin-bottom: 5px;
    & > option {
        border: none;
    }
`
export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    & > label {
        color: ${({ theme }) => theme.color.secondary};
        font-weight: bold;
        margin-bottom: 10px;
        font-size: 20px;
    }
    & > input {
        border: none;
        border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
        color: ${({ theme }) => theme.color.secondary};
        font-size: 15px;
        outline: none;
    }
`