package com.neo.kttvwebadmin.exception;

import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingPathVariableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class ApplicationResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		List<FieldError> fieldErrorList = ex.getBindingResult().getFieldErrors();
		String message = "";
		if (fieldErrorList.size() > 0) {
			message = fieldErrorList.get(0).getDefaultMessage();
		}
		ResponseBasicObj responseBasicObj = new ResponseBasicObj(400, message);
		return new ResponseEntity<Object>(responseBasicObj, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(Exception.class)
	public final ResponseEntity<Object> handleAllExceptions(Exception ex, WebRequest request) {
		ResponseBasicObj responseBasicObj = new ResponseBasicObj(500, "Lỗi hệ thống : " + ex.getMessage());

		return new ResponseEntity<Object>(responseBasicObj, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	/**
	 * The method handle only StoreBusinessException
	 * 
	 * @param ex
	 * @param request
	 * @return
	 */
	@ExceptionHandler(KTTVException.class)
	public final ResponseEntity<Object> handleAgencyException(KTTVException ex, WebRequest request) {

		ResponseBasicObj responseBasicObj = new ResponseBasicObj(ex.getCode(), ex.getMessage());

		return new ResponseEntity<Object>(responseBasicObj, HttpStatus.BAD_REQUEST);
	}

	@Override
	protected ResponseEntity<Object> handleMissingServletRequestParameter(MissingServletRequestParameterException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ResponseBasicObj responseBasicObj = new ResponseBasicObj(400, "Truyền thiếu tham số :" + ex.getParameterName());
		return new ResponseEntity<Object>(responseBasicObj, HttpStatus.BAD_REQUEST);
	}

	@Override
	protected ResponseEntity<Object> handleMissingPathVariable(MissingPathVariableException ex, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		ResponseBasicObj responseBasicObj = new ResponseBasicObj(400,
				"Truyền thiếu tham số url :" + ex.getVariableName());
		return new ResponseEntity<Object>(responseBasicObj, HttpStatus.BAD_REQUEST);
	}
}
