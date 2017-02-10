(define
	(revlist l)
		(if (null? l)
			()
		(addToList (revlist (cdr l)) (cons (car l) ())
		)
	)  
)
