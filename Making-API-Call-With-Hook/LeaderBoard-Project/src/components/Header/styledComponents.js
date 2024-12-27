import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const HeaderElementsContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 90%;
  @media screen and (min-width: 768px) {
    max-width: 1100px;
  }
`

export const Logo = styled.img`
  height: 36px;
`

export const Own = styled.p`
  color:#41FAB7;
  font-weight:bold;
  border:1px solid #41FAB7;
  padding:4px 15px;
  border-radius:5px 0px 5px 0px;
  cursor:pointer;
`
