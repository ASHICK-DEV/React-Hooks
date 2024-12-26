import {useState} from 'react'
import {v4 as uuid4} from 'uuid'

import {
  MainContainer,
  Heading,
  InputCard,
  InputTitle,
  TextAreaInput,
  Button,
  Image,
  NoteItemContainer,
  EmptyDetails,
  ListContainer,
  EmptyHeading,
  Own,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [list, setList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()

    if (title.length > 0 && note.length > 0) {
      const newList = {
        id: uuid4(),
        title,
        note,
      }
      setList(prevState => [...prevState, newList])
      setTitle('')
      setNote('')
    } else {
      alert('Enter Valid Input')
    }
  }

  console.log(list)

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <Own>Designed by Ashiq</Own>
      <InputCard onSubmit={onAddNote}>
        <InputTitle
          placeholder="Title"
          onChange={onChangeTitle}
          value={title}
        />
        <TextAreaInput
          placeholder="Take a Note...."
          onChange={onChangeNote}
          value={note}
          rows="30"
          cols="55"
        />
        <Button type="submit">Add</Button>
      </InputCard>

      {list.length === 0 ? (
        <NoteItemContainer>
          <Image
            alt="notes empty"
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyDetails>Notes you add will appear here</EmptyDetails>
        </NoteItemContainer>
      ) : (
        <ListContainer>
          {list.map(eachList => (
            <NoteItem key={eachList.id} listDetails={eachList} />
          ))}
        </ListContainer>
      )}
    </MainContainer>
  )
}

export default Notes
