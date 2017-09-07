create view student (num, id, pw, name, ssn, phone, email, title, regdate)
as
select rownum, t.id, t.pw, t.name, t.ssn, t.phone, t.email,t.title, t.regdate
from (
    select a.member_id id, a.name name, rpad(substr(a.ssn,1,8),14,'*') ssn, a.phone phone, a.email email, listagg(s.title,',') within group(order by s.title) title, 
    		to_char(a.regdate, 'yyyy-MM-dd') regdate
    from member a
        left outer join major m on a.member_id = m.member_id
        left join subject s on m.subj_id = s.subj_id
    group by a.member_id,a.name, a.ssn, a.phone, a.email,a.regdate  
    order by regdate
)t
order by rownum desc;

-- rpad(substring(a.ssn,6),14,'*')
-- group_concat(s.title separator ',') from Major group by member_id
-- DATE_FORMAT(SYSDATE(), '%Y-%m-%d')



create view student (
	id, pw, name, 
	ssn, phone, email, 
	title, regdate
	)
as
(
from (
	select 
		a.member_id id,
		a.name name, 
		rpad(substring(a.ssn,1,8),14,'*') ssn,
		DATE_FORMAT(a.regdate, '%Y-%m-%d') regdate,
		a.phone phone, 
		a.email email, 
		a.pw pw,
		group_concat(s.title,',') title
	from
		member a
		left join major m 
			on a.member_id like m.member_id
		left join subject s 
			on m.subj_id like s.subj_id
		group by 
			a.member_id, a. name, a.ssn, 
			a.regdate, a.phone, a.email
		order by regdate
);
