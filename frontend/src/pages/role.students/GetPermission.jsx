import React, { useState, useEffect, useRef } from 'react'
import moment from 'moment'

import Select from '@material-ui/core/es/Select'
import MenuItem from '@material-ui/core/es/MenuItem'
import TextField from '@material-ui/core/es/TextField'
import InputLabel from '@material-ui/core/es/InputLabel'
import FormControl from '@material-ui/core/es/FormControl'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import { axios } from '../../plugins/axios'
import { API_ROUTES } from '../../constants/apiRoutes'
import { userStatusColor } from '../../constants/statusColor'

import { Navigation } from '../../layout/Navigation'
import { LinkComponent } from '../../components/LinkComponent'
import { ButtonComponent } from '../../components/ButtonComponent'

import { StyledH1 } from '../../styles/StyledH1'
import { StyledCard } from '../../styles/StyledCard'
import { StyledSpacer } from '../../styles/StyledSpacer'
import { StyledContainer } from '../../styles/StyledContainer'
import { StyledStatusBar } from '../../styles/StyledStatusBar'
import { StyledBackButton } from '../../styles/StyledBackButton'
import { StyledTypography } from '../../styles/StyledTypography'

export const GetPermission = ({ user, history, location }) => {
  const { status } = user

  const [error, setError] = useState(false)
  const [type, setType] = useState('')
  const [place, setPlace] = useState('')
  const [entry, setEntry] = useState('') // 2020-01-10 21:57:19
  const [out, setOut] = useState('') // 2020-01-10 21:57:19
  const [googleLocation, setGoogleLocation] = useState('test location')

  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
    // TODO: get the update user's status
  }, [])

  const axiosQuery = async (method, url, data) => {
    const request = await axios({
      method: method,
      url: url,
      data: data
    })
    console.log(request.data.message)
    if (
      request.data.message === 'User has already permission request' ||
      request.data.message === 'User already has a request in process'
    ) {
      setError('You already have a permission')
    } else {
      // const { from } = location.state || { from: { pathname: '/' } }
      // history.push(from)
    }
  }
  const submitHandle = () => {
    if (type === 'normal') {
      axiosQuery(
        API_ROUTES.requestPermission.method,
        API_ROUTES.requestPermission.url,
        { place, date: moment().format('YYYY/MM/DD') }
      )
    } else if (type === 'weekends') {
      axiosQuery(
        API_ROUTES.requestWeekendsPermission.method,
        API_ROUTES.requestWeekendsPermission.url,
        {
          in_date_time: entry.replace('T', ' '),
          out_date_time: out.replace('T', ' '),
          location: googleLocation
        }
      )
    }
  }

  const button = (disable = false) => (
    <ButtonComponent
      click={submitHandle}
      background="#12B6C6"
      width="300px"
      disable={disable}
    >
      Confirm
    </ButtonComponent>
  )

  return (
    <StyledContainer>
      <Navigation />
      <StyledSpacer height="54px" />
      <StyledCard flexDirection="column" roundedTop width="340px">
        <StyledBackButton>
          <LinkComponent to="/">
            <ArrowBackIosIcon fontSize="small" style={{ marginTop: '5px' }} />
          </LinkComponent>
        </StyledBackButton>
        <StyledH1
          fontWeigth="600"
          color="#12B6C6"
          style={{ margin: '0 0 8px 0' }}
        >
          Get my permission
        </StyledH1>

        <StyledSpacer height="20px" />
        <FormControl fullWidth variant="outlined">
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            labelWidth={labelWidth}
            onChange={e => setType(e.target.value)}
            value={type}
          >
            <MenuItem value={'normal'}>Normal</MenuItem>
            <MenuItem value={'weekends'}>Weekends</MenuItem>
          </Select>
        </FormControl>

        {type === 'normal' && (
          <TextField
            variant="outlined"
            label="Place"
            margin="normal"
            fullWidth
            id="place"
            onChange={e => setPlace(e.target.value)}
            value={place}
            required
          />
        )}

        {/* TODO: add the google maps api here!! */}
        {type === 'weekends' && (
          <>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="entry"
              label="Return date"
              type="datetime-local"
              value={entry}
              onChange={e => setEntry(e.target.value)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="out"
              label="Departure date"
              type="datetime-local"
              value={out}
              onChange={e => setOut(e.target.value)}
              InputLabelProps={{
                shrink: true
              }}
            />
            {/* <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={entry}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time'
              }}
            /> */}
            <TextField
              variant="outlined"
              label="Location"
              margin="normal"
              fullWidth
              id="location"
              onChange={e => setGoogleLocation(e.target.value)}
              value={googleLocation}
              required
            />
          </>
        )}

        {!error && <StyledSpacer height="40px" />}
        {error && (
          <>
            <StyledSpacer height="21px" />
            <StyledTypography color="red" fontSize="16px">
              {error}
            </StyledTypography>
          </>
        )}
        {type === 'normal'
          ? !place
            ? button(true)
            : button(false)
          : type === 'weekends'
          ? !entry && !out && !googleLocation
            ? button(true)
            : button(false)
          : null}
        <StyledSpacer height="10px" />
      </StyledCard>
      <StyledStatusBar
        background={userStatusColor(status)}
        width="340px"
        margin="auto"
      />
    </StyledContainer>
  )
}
