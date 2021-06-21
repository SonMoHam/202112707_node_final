# 202112707_node_final

## Table
### Countries
 - id
 - alpha2Code   
 - alpha3Code
 - numericCode 
 - nameKR      
 - nameEN     
 - createdAt
 - updatedAt
 - 데이터 예시

![country data](https://user-images.githubusercontent.com/73145656/122716676-85bb1800-d2a5-11eb-8cba-633afaea38aa.PNG)


### Subdivisions 
 - id
 - code
 - nameKR
 - nameEN
 - createdAt
 - updatedAt
 - 데이터 예시

![subdivisiondata](https://user-images.githubusercontent.com/73145656/122716683-881d7200-d2a5-11eb-8356-30c742912f29.PNG)

---
## 메소드
### Get /country 
- 국가 목록 보기
#### 응답 - JSON
- msg - 성공/실패 여부
- data
- 예시

![image](https://user-images.githubusercontent.com/73145656/122719576-53131e80-d2a9-11eb-8053-4b5a527db03e.png)
#
### Get country/:country_code
- country_code 해당 국가 상세 요청

### Post country
- 국가 등록
