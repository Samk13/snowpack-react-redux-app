import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './articles.module.css'
import ArticleListItem from '../../components/ArticleListItem.jsx'
import InputComponent from '../../components/InputComponent.jsx'
import TextAreaComponent from '../../components/TextAreaComponent.jsx'
import ButtonComponent from '../../components/ButtonComponent.jsx'
import { create, getArticles } from './articlesSlice'
import { useForm } from 'react-hook-form'

export default function Articles() {
  const { register, handleSubmit, errors, reset } = useForm()
  const selectArticles = useSelector(getArticles)
  const authorRef = useRef(null)
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(create(data))
    reset()
  }
  useEffect(() => {
    if (authorRef.current) {
      register(authorRef.current, { required: true, maxLength: 20 })
      authorRef.current.focus()
    }
    return
  }, [register])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Articles</h1>
      <section className={styles.fromContainer}>
        <h1 className={styles.createTitle}>Create new Article</h1>
        <form
          className={styles.articlesContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputComponent
            errors={errors?.author && 'This field is required'}
            placeholder="author"
            ref={authorRef}
            label="author"
            name="author"
          />
          <TextAreaComponent
            errors={errors?.body && 'This field is required'}
            ref={register({ required: true })}
            placeholder="body"
            tag="input"
            label="body"
            name="body"
            id="body"
          />
          <ButtonComponent type="submit">Submit</ButtonComponent>
        </form>
      </section>
      <section className={styles.articlesContainer}>
        <h1 className={styles.articlesTitle}>All articles</h1>
        <div>
          <div>
            {selectArticles.map(
              ({ id, lastEdited, createdAt, author, imgUrl, body, seen }) => {
                return (
                  <div key={id} className={styles.article}>
                    <ArticleListItem
                      lastEdited={lastEdited}
                      createdAt={createdAt}
                      author={author}
                      image={imgUrl}
                      body={body}
                      seen={seen}
                      id={id}
                    />
                  </div>
                )
              }
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
