import styled from 'styled-components';

export const ListOfContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.span`
  flex-grow: 1;
  margin-right: 12px;
`;

export const DeleteBtn = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 5px 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e63c3c;
  }
`;
