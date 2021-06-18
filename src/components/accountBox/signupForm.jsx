import React, {useContext} from 'react';
import { BoxContainer, FormContainer, BoldLink, MutedLink, Input, SubmitButton } from './common';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';

export function SignupForm(props) {
	const { switchToSignin } = useContext(AccountContext);

	return (
	<BoxContainer>
		<FormContainer>
			<Input type="text" placeholder="Name"/>
			<Input type="email" placeholder="E-mail"/>
			<Input type="password" placeholder="Password"/>
			<Input type="password" placeholder="Confirm password"/>
		</FormContainer>

		<Marginer direction="vertical" margin={5}/>
			<Marginer direction="vertical" margin="1.5em"/>
			<SubmitButton type="submit">Signup</SubmitButton>
			<Marginer direction="vertical" margin="1em"/>
			<MutedLink href="#">Have an account? <BoldLink href="#" onClick={switchToSignin}>Signin</BoldLink>.</MutedLink>
	</BoxContainer>
	);
}